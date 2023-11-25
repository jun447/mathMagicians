
function ResultScreen(props) {
  const { next, operation, total } = props;
  return (
    <div className="row">
      <div className="col-12 bg-secondary text-light py-3 text-end fw-bold">{ next || operation || total || 0 }</div>
    </div>
  );
}
export default ResultScreen;
