import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    degree: "Юриспруденция (магистр): Гражданское и семейное право",
    institution: "Санкт-Петербургский государственный университет, Юридический факультет",
    period: "2019",
  },
    {
    degree: "Юриспруденция (бакалавр)",
    institution: "Санкт-Петербургский государственный университет, Юридический факультет",
    period: "2017",
  },
];

const experienceData = [
  {
    role: "Частнопрактикующий юрист, ИП",
    period: "2020 - настоящее время",
    responsibilities: [
      "Полное сопровождение процедур банкротства физических и юридических лиц.",
      "Представительство интересов доверителей в арбитражных судах и судах общей юрисдикции.",
      "Консультирование по вопросам гражданского, корпоративного и банкротного права.",
      "Разработка и анализ договоров, правовая экспертиза сделок.",
    ],
  },
  {
    role: "Ведущий юрист",
    company: "Юридическая фирма 'Право и Порядок'",
    period: "2017 - 2020",
    responsibilities: [
        "Ведение сложных судебных дел, включая споры в сфере недвижимости и корпоративные конфликты.",
        "Участие в процедурах банкротства на стороне кредиторов.",
        "Подготовка юридических заключений по комплексным правовым вопросам.",
    ],
  },
  {
    role: "Помощник юриста",
    company: "Адвокатское бюро 'Защита'",
    period: "2015 - 2017",
    responsibilities: [
        "Подготовка процессуальных документов (иски, отзывы, ходатайства).",
        "Анализ судебной практики и законодательства.",
        "Участие в судебных заседаниях вместе со старшими юристами.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container py-20 sm:py-24">
          <AnimatedSection>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">Обо мне</h1>
              <p className="text-lg text-muted-foreground">
                Квалифицированный юрист с многолетним опытом в области банкротства и судебного представительства. Моя цель — находить эффективные и законные решения для самых сложных правовых задач.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-12">
                <AnimatedSection delay={200} animationType="slide-right">
                    <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
                        <Briefcase className="h-8 w-8 text-primary" />
                        Опыт работы
                    </h2>
                    <div className="space-y-8 relative border-l-2 border-primary/20 pl-8">
                         <div className="absolute -left-[11px] top-2 w-5 h-5 bg-primary rounded-full ring-4 ring-background"></div>
                        {experienceData.map((job, index) => (
                            <Card key={index} className="bg-secondary/50">
                                <CardHeader>
                                    <CardTitle className="font-body text-xl">{job.role}</CardTitle>
                                    <CardDescription>
                                        {job.company ? `${job.company} | ${job.period}` : job.period}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                 </CardContent>
                            </Card>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            <div className="md:col-span-2 space-y-12">
                 <AnimatedSection delay={200} animationType="slide-left">
                    <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        Образование
                    </h2>
                     <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <Card key={index} className="bg-secondary/50">
                                <CardHeader>
                                    <CardTitle className="font-body text-xl">{edu.degree}</CardTitle>
                                    <CardDescription>{edu.institution}</CardDescription>
                                    <p className="text-sm text-muted-foreground pt-2">{edu.period}</p>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={400} animationType="slide-left">
                     <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
                        <Award className="h-8 w-8 text-primary" />
                        Ключевые принципы
                    </h2>
                     <Card className="bg-secondary/50">
                         <CardContent className="pt-6">
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span><strong>Честность и прозрачность:</strong> всегда информирую доверителей о реальных перспективах дела.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span><strong>Индивидуальный подход:</strong> глубоко вникаю в каждую ситуацию для разработки оптимальной стратегии.</span>
                                </li>
                                 <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span><strong>Конфиденциальность:</strong> строго соблюдаю адвокатскую тайну и гарантирую сохранность информации.</span>
                                </li>
                            </ul>
                         </CardContent>
                     </Card>
                </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
