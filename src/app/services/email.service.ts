import { getNipErrorMock, getNipInitialMock } from './nip.service';

export function generateNipEmailLink(tipo: 'inicial' | 'erro') {
  const baseUrl = 'http://localhost:3000/pages/email'; // Página que trata os parâmetros e redireciona
  const params = new URLSearchParams({ tipo });
  return `${baseUrl}?${params.toString()}`;
}

export function simulateEmailContent(tipo: 'inicial' | 'erro') {
  const data = tipo === 'erro' ? getNipErrorMock() : getNipInitialMock();
  const nip = data.nip;
  const link = `http://localhost:3000/pages/nip?nip=${nip}`;

  return {
    subject: 'Notificação de Intermediação Preliminar',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; color: #2D2D2D;">
        <h2 style="color: #002D4B;">Notificação de Intermediação Preliminar</h2>
        <p>Olá, <strong>${data.nome}</strong></p>
        <p>Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome.</p>

        <div style="background-color: #f9f9f9; padding: 16px; border-radius: 8px; margin: 24px 0;">
          <h3 style="color: #002D4B; margin-top: 0;">Dados da notificação</h3>
          <p><strong>Beneficiário:</strong> ${data.nome}</p>
          <p><strong>Data de abertura:</strong> ${data.dataAbertura}</p>
        </div>

        <p><strong>Reconhece esta NIP?</strong></p>
        <a href="${link}" style="display: inline-block; padding: 12px 24px; background-color: #00558C; color: white; text-decoration: none; border-radius: 6px; margin-bottom: 20px;">
          Responder
        </a>

        <p style="font-size: 14px; color: #555;">Se você não reconhece esta solicitação, por favor, entre em contato com a CASSI.</p>

        <p style="font-size: 14px;"><strong>Central CASSI 0800 729 0080</strong><br />
        Atende também deficiente auditivo<br />
        <a href="https://www.cassi.com.br" target="_blank" style="color: #00558C;">www.cassi.com.br</a></p>
      </div>
    `,
  };
}
