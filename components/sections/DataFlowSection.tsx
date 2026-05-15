import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy } from "@/lib/copy";

const ink = "#0a0a0a";
const hair = "rgba(10,10,10,0.12)";
const mist = "rgba(10,10,10,0.55)";

function Box({
  x,
  y,
  w,
  h,
  lines,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: readonly string[];
}) {
  const midY = y + h / 2;
  const startY = midY - ((lines.length - 1) * 7);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="#ffffff"
        stroke={ink}
        strokeWidth={0.5}
      />
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + w / 2}
          y={startY + i * 14}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={ink}
          style={{
            fontFamily: "var(--font-ibm-plex-mono), ui-monospace, monospace",
            fontSize: 11,
          }}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function DataFlowDiagram() {
  return (
    <svg
      viewBox="0 0 1200 560"
      className="h-auto w-full"
      role="img"
      aria-label="LightRain read-only data flow"
    >
      <defs>
        <marker
          id="arrow-head"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={ink} />
        </marker>
      </defs>

      <Box x={500} y={24} w={200} h={48} lines={["LightRain"]} />
      <Box x={470} y={92} w={260} h={48} lines={["Lightra Read API"]} />
      <Box x={490} y={160} w={220} h={48} lines={["MongoDB"]} />

      <Box x={72} y={248} w={210} h={48} lines={["Base indexer"]} />
      <Box x={495} y={248} w={230} h={48} lines={["Snowflake materializer"]} />
      <Box x={918} y={248} w={210} h={48} lines={["PIOL oracle"]} />

      <Box x={97} y={328} w={160} h={40} lines={["Base"]} />
      <Box x={530} y={328} w={200} h={40} lines={["Snowflake warehouse"]} />
      <Box x={943} y={328} w={160} h={40} lines={["Attester quorum"]} />

      <line
        x1={56}
        y1={408}
        x2={1144}
        y2={408}
        stroke={hair}
        strokeWidth={0.5}
        strokeDasharray="5 5"
      />
      <text
        x={56}
        y={396}
        fill={mist}
        style={{
          fontFamily: "var(--font-ibm-plex-mono), ui-monospace, monospace",
          fontSize: 11,
        }}
      >
        Trust boundary
      </text>

      <Box x={410} y={432} w={380} h={52} lines={["Backend execution system"]} />
      <Box x={92} y={444} w={160} h={40} lines={["Base"]} />

      <g
        stroke={ink}
        strokeWidth={0.5}
        fill="none"
        markerEnd="url(#arrow-head)"
      >
        <line x1={600} y1={72} x2={600} y2={92} />
        <line x1={600} y1={140} x2={600} y2={160} />
        <line x1={600} y1={208} x2={600} y2={228} />
        <line x1={177} y1={248} x2={520} y2={228} />
        <line x1={610} y1={248} x2={600} y2={228} />
        <line x1={1023} y1={248} x2={680} y2={228} />
        <line x1={177} y1={328} x2={177} y2={296} />
        <line x1={630} y1={328} x2={610} y2={296} />
        <line x1={1023} y1={328} x2={1023} y2={296} />
        <line x1={600} y1={408} x2={600} y2={432} />
        <line x1={410} y1={458} x2={252} y2={464} />
      </g>
    </svg>
  );
}

export function DataFlowSection() {
  return (
    <section
      id="architecture"
      aria-labelledby="dataflow-heading"
      className="min-h-screen bg-ivory py-24 text-noir md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8 !text-sable">{copy.dataFlow.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading
            id="dataflow-heading"
            variant="lg"
            className="mb-10 !text-noir"
          >
            {copy.dataFlow.headline}
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-16 max-w-[62ch] text-[17px] font-normal leading-[1.6] tracking-normal text-noir">
            {copy.dataFlow.body}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <DataFlowDiagram />
        </Reveal>
      </Container>
    </section>
  );
}
