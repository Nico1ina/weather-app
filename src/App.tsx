import Forecast from "./components/Forecast";
import Search from "./components/Search";
import Background from "./components/Background/Background";
import Menu from "./components/Navbar/Navbar";
import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();

  return (
    <Background>
      <Menu />
      <main className="flex justify-center items-center h-[100vh] w-full">
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
    </Background>
  );
};

export default App;
