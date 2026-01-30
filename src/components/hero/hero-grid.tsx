interface BentoCellProps {
  variant: "primary" | "secondary" | "detail"
  label: string
  title: string
  children?: any
}

function BentoCell(props: BentoCellProps) {
  return (
    <div class="bento-cell">
      <span>{props.label}</span>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}

export function HeroGrid() {
  return (
    <section>
      <BentoCell
        variant="primary"
        label="Performance Lab"
        title="Bun + Connect RPC"
      >
        <p>
          Eliminating the Node.js overhead. 2.1x throughput increase in
          production environments.
        </p>
        <div>
          <div>2.1X</div>
          <div>
            <span>LATENCY_DELTA: -42ms</span>
            <span>THRPT_MAX: 141k req/s</span>
            <span>CPU: i9-12900H</span>
          </div>
        </div>
      </BentoCell>

      <BentoCell
        variant="secondary"
        label="Systems ++ Memory Control"
        title="The Zig Pivot"
      >
        <pre>
          var gpa = std.heap.GeneralPurposeAllocator(.{}){};
        </pre>
        <pre>defer _ = gpa.deinit();</pre>
      </BentoCell>

      <BentoCell
        variant="secondary"
        label="Strategy ++ Automation"
        title="AI as Leverage"
      >
        <p>
          Scale throughput, not headcount. Automated quality control &amp;
          knowledge retrieval.
        </p>
      </BentoCell>
    </section>
  )
}
