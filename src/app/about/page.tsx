import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    degree: "Юриспруденция (магистр):",
    specialization: "Гражданское и семейное право",
    institution: "Санкт-Петербургский государственный университет, Юридический факультет",
    period: "2019",
  },
    {
    degree: "Юриспруденция (бакалавр)",
    specialization: null,
    institution: "Санкт-Петербургский государственный университет, Юридический факультет",
    period: "2017",
  },
];

const experienceData = [
  {
    role: "Юрист",
    company: "Индивидуальное предпринимательство / частная практика",
    period: "2021 - настоящее время",
    responsibilities: [
      "Консультирование юридических и физических лиц по вопросам банкротства.",
      "Ведение судебных дел в арбитражных судах и в судах общей юрисдикции (взыскание задолженности, оспаривание сделок и др.).",
      "Корпоративная работа (подготовка договоров, консультирование по отдельным вопросам текущей деятельности).",
    ],
  },
  {
    role: "Юрист",
    company: 'ЗАО "Автотранспортное предприятие Метростроя"',
    period: "2021 - 2022",
    responsibilities: [
      "Сопровождение компании в текущей деятельности.",
      "Консультирование по вопросам банкротства.",
      "Взыскание дебиторской задолженности.",
    ],
  },
  {
    role: "Юрист",
    company: 'АНО "Санкт-Петербургский экспертно-правовой центр"',
    period: "2017 - 2021",
    responsibilities: [
        "Подготовка и подача процессуальных документов (взыскание задолженностей, оспаривание сделок, привлечение к субсидиарной ответственности).",
        "Подготовка правовых заключений и обзоров судебной практики.",
        "Участие в судебных заседаниях и представление интересов клиентов в государственных органах.",
    ],
  },
    {
    role: "Практикант",
    company: "Печеский и партнеры, Адвокатское бюро",
    period: "2017",
    responsibilities: [
        "Составление правовых документов (исковых заявлений, жалоб, обращений).",
        "Анализ законодательства и судебной практики.",
        "Систематизация документов.",
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
              <h1 className="text-4xl md:text-5xl font-headline font-bold">Кондратьева Анна Владимировна</h1>
              <p className="text-lg text-muted-foreground">
                Квалифицированный юрист с многолетним опытом в области банкротства и судебного представительства. Моя цель — находить эффективные и законные решения для самых сложных правовых задач.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-12">
                <AnimatedSection delay={200} animationType="slide-right">
                    <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3 group cursor-pointer">
                        <Briefcase className="h-8 w-8 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1" />
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
                    <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3 group cursor-pointer">
                        <GraduationCap className="h-8 w-8 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1" />
                        Образование
                    </h2>
                     <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <Card key={index} className="bg-secondary/50">
                                <CardHeader>
                                    <CardTitle className="font-body text-xl">
                                      {edu.degree}
                                      {edu.specialization && <span className="ml-1 text-lg font-normal text-muted-foreground">{edu.specialization}</span>}
                                    </CardTitle>
                                    <CardDescription>{edu.institution}</CardDescription>
                                    <p className="text-sm text-muted-foreground pt-2">{edu.period}</p>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={400} animationType="slide-left">
                     <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3 group cursor-pointer">
                        <Award className="h-8 w-8 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1" />
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
