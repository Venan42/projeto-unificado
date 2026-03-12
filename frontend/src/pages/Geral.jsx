import React from 'react'
import { Activity, Building2, BarChart2, CalendarRange } from 'lucide-react'

function KPICard({ icon: Icon, label, value, cor, subtitle }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm transition-all hover:shadow-md">
      <div className={`p-3 rounded-lg ${cor} shrink-0`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-800 mt-0.5">
          {value !== undefined ? value : '—'}
        </p>
        {subtitle && (
           <p className="text-xs text-slate-400 mt-1 font-medium">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export default function Geral() {
  // --- Simulação de Dados---
  const mockData = {
    ano_referencia: 2023,
    mediana_atendimentos_usf: 4520,
    total_atendimentos_ano: 245800,
    total_usfs_ativas: 54,
    media_atendimentos_usf: 4551 
  }

  const isLoading = false; 

  if (isLoading) {
    return <div className="h-96 flex items-center justify-center text-slate-500 font-medium">Carregando visão geral...</div>
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Cabeçalho da Página */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Visão Geral do Sistema</h1>
        <p className="text-slate-500 text-sm mt-1">
          Resumo executivo e indicadores chave de desempenho da rede de saúde.
        </p>
      </div>

      {/*
        Grid de KPIs Principais.
        A resposta para a sua pergunta principal é o primeiro card.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CARD PRINCIPAL: A resposta para sua pergunta */}
        <KPICard
          icon={BarChart2}
          label="Mediana de Atendimentos/USF"
          // Usando toLocaleString para formatar milhar (ex: 4.520)
          value={mockData.mediana_atendimentos_usf.toLocaleString('pt-BR')}
          cor="bg-purple-600"
          subtitle={`Referência: ${mockData.ano_referencia}`}
        />

        {/* Cards de Contexto (para manter o grid de 4 colunas) */}
        <KPICard
          icon={Activity}
          label="Total de Atendimentos"
          value={mockData.total_atendimentos_ano.toLocaleString('pt-BR')}
          cor="bg-blue-600"
          subtitle={`Acumulado ${mockData.ano_referencia}`}
        />

        <KPICard
          icon={Building2}
          label="USFs Ativas"
          value={mockData.total_usfs_ativas}
          cor="bg-emerald-600"
          subtitle="Unidades reportando dados"
        />

         <KPICard
          icon={CalendarRange}
          label="Média de Atendimentos/USF"
          value={mockData.media_atendimentos_usf.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
          cor="bg-slate-600"
          subtitle="Para comparação c/ mediana"
        />
      </div>

      {/*
         Exemplo de uma seção futura, seguindo a estética de "container branco com borda"
         do código anterior, caso queira adicionar um gráfico geral depois.
      */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col items-center justify-center text-center space-y-4">
        <div className="p-4 bg-slate-50 rounded-full">
            <BarChart2 size={32} className="text-slate-400" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-slate-800">Visualizações Detalhadas</h3>
            <p className="text-sm text-slate-500 max-w-md mt-2">
            Selecione um módulo específico no menu lateral (como Pressão Arterial ou Diabetes) para visualizar gráficos detalhados e tendências.
            </p>
        </div>
      </div>
    </div>
  )
}