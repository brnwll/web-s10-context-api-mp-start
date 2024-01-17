import React, { useContext } from "react";
import { QuotesContext } from "../context/quotesContext";
import Quotes from "./Quotes";
import QuoteForm from "./QuoteForm";

export default function App() {
  const {
    quotes,
    highlightedQuote,
    displayAllQuotes,
    createQuote,
    deleteQuote,
    editQuoteAuthenticity,
    setHighlightedQuote,
    toggleVisibility,
  } = useContext(QuotesContext);

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
        deleteQuote={deleteQuote}
        editQuoteAuthenticity={editQuoteAuthenticity}
        setHighlightedQuote={setHighlightedQuote}
        toggleVisibility={toggleVisibility}
        displayAllQuotes={displayAllQuotes}
        highlightedQuote={highlightedQuote}
        quotes={quotes}
      />
      <QuoteForm createQuote={createQuote} />
    </div>
  );
}
