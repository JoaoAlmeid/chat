import { useState } from "react"
import { useTheme } from 'next-themes'
import { Inter } from "next/font/google";
import { Calendar } from '@/components/ui/calendar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark': 'light')}>
          Alterar tema
        </button>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </main>
  );
}
