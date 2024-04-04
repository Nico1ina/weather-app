import Forecast from "./components/Forecast";
import Search from "./components/Search";

import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
  const imageUrl =
    "https://64.media.tumblr.com/5b65b59a580630730c8bd4b5015ca19f/6d2d1ab3c1fb4c2b-f8/s1280x1920/fd39f697eade06189b25e4fec2a7648e5774746c.jpg";
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();

  return (
    <main className="flex justify-center items-center bg-[url('https://64.media.tumblr.com/5b65b59a580630730c8bd4b5015ca19f/6d2d1ab3c1fb4c2b-f8/s1280x1920/fd39f697eade06189b25e4fec2a7648e5774746c.jpg')] bg-cover bg-center h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
