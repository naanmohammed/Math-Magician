import Quotes from '../components/quotes';

function QuotesPage() {
  return (
    <div className="quotesPage">
      <h2>{Quotes()}</h2>
    </div>
  );
}

export default QuotesPage;
