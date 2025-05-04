import { simulateEmailContent, generateNipEmailLink } from '../email.service';

describe('Email Service', () => {
  it('deve gerar um link de e-mail para o tipo inicial', () => {
    const link = generateNipEmailLink('inicial');
    expect(link).toBe('http://localhost:3000/pages/email?tipo=inicial');
  });

  it('deve gerar o conteúdo correto do e-mail para tipo inicial', () => {
    const email = simulateEmailContent('inicial');
    expect(email.subject).toBe('Notificação de Intermediação Preliminar');
    expect(email.html).toContain('Olá, <strong>Leandro Henrique</strong>');
    expect(email.html).toContain('Reconhece esta NIP?');
    expect(email.html).toContain('/pages/nip?nip=111111');
  });

  it('deve gerar o conteúdo correto do e-mail para tipo erro', () => {
    const email = simulateEmailContent('erro');
    expect(email.html).toContain('/pages/nip?nip=999999');
    expect(email.html).toContain('Leandro Henrique');
  });
});
