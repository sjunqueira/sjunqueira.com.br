"use client";

import { motion } from "framer-motion";
import { 
  SiPostgresql, SiApachekafka, SiApachespark, SiApacheairflow, 
  SiSnowflake, SiLooker
} from "react-icons/si";
import { TbActivity, TbApi, TbRobot, TbBuildingStore, TbBrain } from "react-icons/tb";
import DbtLogo from "../dbt-logo/dbt";


const NODE_SIZE = 48;

// Matriz de coordenadas perfeitamente distribuída em um grid de 480x480
const nodes = [
  // Coluna 1 e 2 (Ingestão)
  { id: "Postgres", Icon: SiPostgresql, x: 60, y: 240 },
  { id: "CDC", Icon: TbActivity, x: 150, y: 240 },
  
  // Coluna 3 (Orquestração e Eventos)
  { id: "Kafka", Icon: SiApachekafka, x: 240, y: 240 },
  { id: "Looker", Icon: SiLooker, x: 240, y: 420 }, // Looker volta para a coluna 3 no final
  
  // Coluna 4 (Processamento Principal)
  { id: "Airflow", Icon: SiApacheairflow, x: 330, y: 240 },
  { id: "Spark", Icon: SiApachespark, x: 330, y: 150 },
  { id: "Snowflake", Icon: SiSnowflake, x: 330, y: 330 },
  { id: "Datamart", Icon: TbBuildingStore, x: 330, y: 420 },
  
  // Coluna 5 (Destinos Finais)
  { id: "APIs", Icon: TbApi, x: 420, y: 90 },
  { id: "AI", Icon: TbRobot, x: 420, y: 190 },
  { id: "dbt", Icon: DbtLogo, x: 420, y: 330 },
  { id: "FeatureStore", Icon: TbBrain, x: 420, y: 420 },
];




export default function PipelineDiagram() {
  return (
    <div className="relative mx-auto my-8 hidden h-[480px] w-[480px] shrink-0 sm:block">
      
      {/* --- SVG PARA AS LINHAS --- */}
      <svg className="absolute inset-0 z-0" width="480" height="480">
        
        {/* === LINHAS SÓLIDAS (FLUXO DE DADOS) === */}
        <g className="stroke-gray-400/50 dark:stroke-blue-800 opacity-50" strokeWidth="1" fill="none" strokeLinecap="round">
          {/* Postgres -> CDC -> Kafka */}
          <path d="M 60 240 L 240 240" />
          
          {/* Kafka -> Spark (Curva pra cima) */}
          <path d="M 240 240 H 280 V 165 A 15 15 0 0 1 295 150 H 330" />
          {/* Spark -> APIs */}
          <path d="M 330 150 H 370 V 105 A 15 15 0 0 1 385 90 H 420" />
          {/* Spark -> AI Models */}
          <path d="M 330 150 H 370 V 175 A 15 15 0 0 0 385 190 H 420" />
          
          {/* Kafka -> Snowflake (Curva pra baixo) */}
          <path d="M 240 240 H 280 V 315 A 15 15 0 0 0 295 330 H 330" />
          {/* Snowflake -> dbt */}
          <path d="M 330 330 L 420 330" />

          {/* Snowflake -> Data Mart */}
          <path d="M 330 330 L 330 420" />
          
          {/* Data Mart -> Looker (Voltando pra esquerda) */}
          <path d="M 330 420 L 240 420" />
          {/* Data Mart -> Feature Store */}
          <path d="M 330 420 L 420 420" />
        </g>

        {/* === LINHAS TRACEJADAS (AIRFLOW ORQUESTRANDO) === */}
        <g className="stroke-orange-300 dark:stroke-orange-800/50" strokeWidth="2" fill="none" strokeDasharray="4 4">
          {/* Airflow -> Spark */}
          <path d="M 330 240 L 330 150" />
          {/* Airflow -> Snowflake */}
          <path d="M 330 240 L 330 330" />
        </g>

        {/* === PONTOS ANIMADOS DE DADOS === */}
        {/* Rota 1: Ingestão até o Kafka */}
        <circle r="4" className="fill-blue-500">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 240 L 240 240" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Rota 2: Streaming (Kafka -> Spark -> APIs) */}
        <circle r="3" className="fill-teal-500">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M 240 240 H 280 V 165 A 15 15 0 0 1 295 150 H 370 V 105 A 15 15 0 0 1 385 90 H 420" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>

        {/* Rota 3: ML Streaming (Kafka -> Spark -> AI) */}
        <circle r="3" className="fill-purple-500">
          <animateMotion dur="3.5s" repeatCount="indefinite" begin="1s" path="M 240 240 H 280 V 165 A 15 15 0 0 1 295 150 H 370 V 175 A 15 15 0 0 0 385 190 H 420" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3.5s" repeatCount="indefinite" begin="1s" />
        </circle>

        {/* Rota 4: Batch (Kafka -> Snowflake -> Data Mart) */}
        <circle r="3" className="fill-indigo-500">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M 240 240 H 280 V 315 A 15 15 0 0 0 295 330 H 330 V 420" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>

        {/* Rota 5: Transformation (Snowflake -> dbt) */}
        <circle r="3" className="fill-indigo-400">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1;1"
            keyTimes="0;0.375;1"
            path="M 330 330 L 420 330"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0;0"
            keyTimes="0;0.05;0.375;0.4;1"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="3" className="fill-cyan-400">
          <animateMotion
            dur="4s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1;1"
            keyTimes="0;0.375;1"
            path="M 420 330 L 330 330"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0;0"
            keyTimes="0;0.05;0.375;0.4;1"
            dur="4s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Rota 6: Serving Looker (Data Mart -> Looker) */}
        <circle r="3" className="fill-blue-400">
          <animateMotion dur="1.5s" repeatCount="indefinite" begin="4.5s" path="M 330 420 L 240 420" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.5s" repeatCount="indefinite" begin="4.5s" />
        </circle>

        {/* Pulsos do Airflow */}
        <circle r="2.5" className="fill-orange-400">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 330 240 L 330 150" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.25s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" className="fill-orange-400">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s" path="M 330 240 L 330 330" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.5s" repeatCount="indefinite" begin="1s" />
        </circle>
      </svg>

      {/* --- NÓS (CAIXAS TEMATIZADAS) --- */}
      {nodes.map(({ id, Icon, x, y }, i) => (
        <motion.div 
          key={id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          // Uso de bg-white pro claro e bg-zinc-900 pro escuro, contornos suaves e sombra
          className="absolute z-10 flex items-center justify-center rounded-[14px] bg-[#ffffff] border border-gray-200 shadow-sm dark:bg-zinc-900 dark:border-zinc-800 transition-transform hover:scale-110"
          

          style={{
            backgroundColor: "var(--surface)", // Cor adaptável ao tema
            border: "1px solid var(--border)",
            top: y - NODE_SIZE / 2,
            left: x - NODE_SIZE / 2,
            width: NODE_SIZE,
            height: NODE_SIZE,
          }}
          title={id} 
        >
          {/* Cor do ícone adaptável ao tema */}
          <Icon
            className="h-[22px] w-[22px] dbt-logo"
          />
        </motion.div>
      ))}
    </div>
  );
}