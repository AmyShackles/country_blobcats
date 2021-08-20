import React from "react";
import Select from "react-select";
import "./App.css";
import { countries } from "./utils/countries.js";

function App() {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [selectedCountry, setSelectedCountry] = React.useState("AD");
    const [errorFamily, setErrorFamily] = React.useState(null);
    const [loadingFamily, setLoadingFamily] = React.useState(false);
    const [selectedCountryFamily, setSelectedCountryFamily] =
        React.useState("AD");
    const handleSelect = (target) => {
        const { value } = target;
        setError(false);
        setLoading(true);
        setSelectedCountry(value);
    };
    const handleLoading = () => {
        setLoading(false);
    };
    const handleSelectCountryFamily = (target) => {
        const { value } = target;
        setErrorFamily(false);
        setLoadingFamily(true);
        setSelectedCountryFamily(value);
    };
    const handleLoadingFamily = () => {
        setLoadingFamily(false);
    };

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            borderBottom: "1px dotted pink",
            color: state.selectProps.menuColor,
            padding: 20,
        }),
    };

    return (
        <main>
            <h1>Country Blobcat Generator</h1>
            <div className="App">
                <div className="country_blobcat">
                    <label className="label" htmlFor="Country">
                        Pick a country to generate a blobcat
                    </label>
                    <Select
                        id="Country"
                        defaultValue={countries[0]}
                        styles={customStyles}
                        label="Country"
                        options={countries}
                        onChange={handleSelect}
                    />
                    {error && <p>Error loading image</p>}
                    {loading && <p>Loading...</p>}
                    <img
                        src={`https://res.cloudinary.com/dm1mmmnqz/image/upload/t_country_blobcat/v1629150747/Flags/${selectedCountry}.png`}
                        alt={`Blobcat holding the flag of ${selectedCountry}`}
                        onLoad={handleLoading}
                        style={{
                            display: loading || error ? "none" : "inline",
                            width: 128,
                            height: 128,
                        }}
                        onError={() => {
                            setLoading(false);
                            setError(true);
                        }}
                    />
                </div>
                <div className="family_blobcat">
                    <label className="label" htmlFor="CountryFamily">
                        Pick a country to generate a blobcat family
                    </label>
                    <Select
                        id="CountryFamily"
                        defaultValue={countries[0]}
                        styles={customStyles}
                        label="Country"
                        options={countries}
                        onChange={handleSelectCountryFamily}
                    />
                    {errorFamily && <p>Error loading image</p>}
                    {loadingFamily && <p>Loading...</p>}
                    <img
                        src={`https://res.cloudinary.com/dm1mmmnqz/image/upload/t_country_blobcat/v1629150747/country_blobcats/${selectedCountryFamily}.png`}
                        alt={`Blobcat holding the flag of ${selectedCountryFamily}`}
                        onLoad={handleLoadingFamily}
                        style={{
                            display:
                                loadingFamily || errorFamily
                                    ? "none"
                                    : "inline",
                            width: 128,
                            height: 128,
                        }}
                        onError={() => {
                            setLoadingFamily(false);
                            setErrorFamily(true);
                        }}
                    />
                </div>
            </div>
        </main>
    );
}

export default App;
