import Forecast from "./components/Forecast";
import Search from "./components/Search";

import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
  const imageUrl =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKAv55B4hJsjTyiWSy7xXTxwsOFI_msfcwMR0wXskw96Uraa3wK3hdaUhJMmv5iWebSIGK-Z0UPiW6nNZnqieJlqCAXOURiufT2AfnEjoM4Yzl-TtpFNZV409VqKCr0R_xG7Rv-P9eG10/s1600/monocloudsexample.jpg";
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();

  return (
    <main className="flex justify-center items-center bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKAv55B4hJsjTyiWSy7xXTxwsOFI_msfcwMR0wXskw96Uraa3wK3hdaUhJMmv5iWebSIGK-Z0UPiW6nNZnqieJlqCAXOURiufT2AfnEjoM4Yzl-TtpFNZV409VqKCr0R_xG7Rv-P9eG10/s1600/monocloudsexample.jpg')] bg-cover bg-center h-[100vh] w-full">
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
