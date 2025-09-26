export type QuizQuestion = {
  id: string;
  text: string;
  choices: string[];
  correct: number; // index în choices
};

export type LessonMeta = {
  slug: string;
  title: string;
  excerpt: string;
  module: string;
  position: number;
};

export type Lesson = LessonMeta & {
  content: string;
  quiz?: { questions: QuizQuestion[] };
};

// Simulăm încărcarea din fișiere locale
const mockLessons: Lesson[] = [
  {
    slug: "what-is-mx",
    title: "Ce este MultiversX?",
    excerpt: "Concepte de bază și prezentare generală a ecosistemului MultiversX.",
    module: "intro",
    position: 1,
    content: `# Ce este MultiversX?

MultiversX este un blockchain de înaltă performanță care permite tranzacții rapide și ieftine...

## Caracteristici principale

- **Scalabilitate**: Până la 15.000 TPS
- **Securitate**: Proof of Stake cu validatori
- **Interoperabilitate**: Cross-chain bridges`,
    quiz: {
      questions: [
        {
          id: "q1",
          text: "Ce este un address pe blockchain?",
          choices: ["Cheia privată", "Identificator public al portofelului", "Seed phrase", "PIN-ul aplicației"],
          correct: 1
        },
        {
          id: "q2",
          text: "Care este simbolul nativ al MultiversX?",
          choices: ["MVX", "EGLD", "MULT", "ELRD"],
          correct: 1
        }
      ]
    }
  },
  {
    slug: "setup-xportal",
    title: "Configurarea xPortal",
    excerpt: "Ghid pas cu pas pentru instalarea și securizarea portofelului xPortal.",
    module: "intro",
    position: 2,
    content: `# Configurarea xPortal

xPortal este portofelul oficial MultiversX - o aplicație mobilă completă pentru gestionarea crypto-urilor tale.

## Pas 1: Descărcarea aplicației

### iPhone (iOS)
1. Deschide App Store
2. Caută "xPortal" 
3. Descarcă aplicația oficială

⚠️ **Atenție**: Asigură-te că descarci aplicația oficială!`,
    quiz: {
      questions: [
        {
          id: "q1",
          text: "Ce trebuie să salvezi în siguranță când creezi un portofel?",
          choices: ["PIN-ul aplicației", "Seed phrase (24 cuvinte)", "Adresa portofelului", "Parola email-ului"],
          correct: 1
        }
      ]
    }
  },
  {
    slug: "first-transaction",
    title: "Prima ta tranzacție",
    excerpt: "Învață să trimiți prima tranzacție EGLD pe testnet în siguranță.",
    module: "intro",
    position: 3,
    content: `# Prima ta tranzacție

Acum că ai portofelul xPortal configurat cu testnet EGLD, să facem prima tranzacție!

## Pregătire

### Verificări preliminare:
- ✅ xPortal instalat și configurat
- ✅ Testnet mode activat
- ✅ Testnet EGLD în portofel

## Pasul 1: Inițierea tranzacției

1. Deschide xPortal și selectează "Send"
2. Introdu adresa destinatar
3. Setează suma - începe cu 0.1 testnet EGLD`,
    quiz: {
      questions: [
        {
          id: "q1",
          text: "Ce verifici înainte de a trimite o tranzacție?",
          choices: ["Doar suma", "Adresa destinatarului și suma", "Doar taxa de gas", "Culoarea portofelului"],
          correct: 1
        }
      ]
    }
  }
];

export const getLessons = (): LessonMeta[] =>
  mockLessons.map(({ content, quiz, ...meta }) => meta);

export const getLessonBySlug = (slug: string): Lesson | undefined =>
  mockLessons.find((l) => l.slug === slug);