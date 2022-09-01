export default function SummaryCard({ categoria, valorCategoria, refId }) {
  return (
    <div class="card">
      <h3>{categoria}</h3>
      <span id={refId}>{valorCategoria}</span>
    </div>
  );
}
