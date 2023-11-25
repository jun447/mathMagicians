import { useState, useEffect } from 'react';
import {ThreeDots} from "react-loader-spinner";

function Quotes() {
  const [fetchQuote, setQoute] = useState('new');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          method: 'GET',
          headers: {
            'X-Api-Key': '9bYtZY3MBF9CLTvvk+V77Q==GQ36dBup073uUX6i',
          },
          signal,
        });
        const json = await res.json();
        const [{ quote }] = json;
        setQoute(quote);
        setIsLoading(false);
      } catch (error) {
        if (!signal.aborted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="container" >
      <div className="row flex justify-content-center align-items-center" style={{ height: "700px "}} >

          {hasError && <div>Something went wrong!</div>}
          {isLoading ? <div className=" w-25">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="gray"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
          />
          </div> : <q className="h3 text-secondary"><b>{fetchQuote}</b></q>}

      </div>
    </div>

  );
}
export default Quotes;
