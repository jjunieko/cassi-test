import { generateNipEmailLink, simulateEmailContent } from '../email.service';

jest.mock('../nip.service', () => ({
  getNipErrorMock: jest.fn(() => ({
    nome: 'João Erro',
    nip: 999999,
    dataAbertura: '01-01-2023',
    email: 'joao@erro.com',
    telefone: '99999-9999',
    interlocutor: true,
    statusFluxo: 'nao_reconhecido',
    situationData: [],
  })),
  getNipInitialMock: jest.fn(() => ({
    nome: 'Maria Sucesso',
    nip: 111111,
    dataAbertura: '02-02-2023',
    email: 'maria@sucesso.com',
    telefone: '88888-8888',
    interlocutor: true,
    statusFluxo: 'reconhecimento_completo',
    situationData: [],
  })),
}));

describe('Email Service', () => {
  describe('generateNipEmailLink', () => {
    it('deve gerar o link corretamente para o tipo inicial', () => {
      const url = generateNipEmailLink('inicial');
      expect(url).toBe('http://localhost:3000/pages/email?tipo=inicial');
    });

    it('deve gerar o link corretamente para o tipo erro', () => {
      const url = generateNipEmailLink('erro');
      expect(url).toBe('http://localhost:3000/pages/email?tipo=erro');
    });
  });

  describe('simulateEmailContent', () => {
    it('deve gerar conteúdo de e-mail para fluxo inicial', () => {
      const content = simulateEmailContent('inicial');
      expect(content.subject).toBe('Notificação de Intermediação Preliminar');
      expect(content.html).toContain('Maria Sucesso');
      expect(content.html).toContain('111111');
    });

    it('deve gerar conteúdo de e-mail para fluxo de erro', () => {
      const content = simulateEmailContent('erro');
      expect(content.subject).toBe('Notificação de Intermediação Preliminar');
      expect(content.html).toContain('João Erro');
      expect(content.html).toContain('999999');
    });
  });
});
