import { Search } from "react-bootstrap-icons";
import classNames from "classnames";
import "./SearchBar.scss";
import React from "react";


/**
 * The SearchBar component takes in user input and emits same as Observable to the parent component.
 * Parent component can receive these observables and call API.
 * The search result of the API can be passed as props to the component, which will then be displayed in dropdown.
 * The SearchBar can also take a callback to be called when user selects an entry from results panel.
 */
export default class SearchBar extends React.Component<SearchBarProps, SearchBarStates> {

    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            resultsContainerClasses: {
                "search-result-container": true,
                "search-focused": false,
                "search-defocused": true
            },
            shouldDisplayResults: false
        };
    }


    changeResultsContainerDisplay(shouldDisplay: boolean) {
        const { searchResults = [] } = this.props;
        this.setState({ shouldDisplayResults: shouldDisplay });
        this.setState({
            resultsContainerClasses: Object.assign({},
                this.state.resultsContainerClasses,
                {
                    "search-focused": Boolean(shouldDisplay && searchResults.length > 0),
                    "search-defocused": !shouldDisplay
                })
        });
    }


    render() {
        const { searchBarWidth = 100, widthUnit = "%", searchResults = [] } = this.props;
        return (
            <div className="search-bar"
                onFocus={() => this.changeResultsContainerDisplay(true)}
                onBlur={() => this.changeResultsContainerDisplay(false)}
            >
                <div className="search-button">
                    <Search id="search-icon"/>
                </div>
                <div style={{ width: `${searchBarWidth}${widthUnit}` }} className="search-text-container">
                    <input data-testid="search-bar-input" onChange={e => this.props.searchCbk(e.target.value)} className="search-text" />
                </div>
                <div
                    data-testid="search-results-container"
                    style={{ width: `${searchBarWidth * 0.93}${widthUnit}` }}
                    className={classNames(this.state.resultsContainerClasses)}>
                    {
                        searchResults.map((result, idx) =>
                            <div className="result-entries" key={idx}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    this.props.resultClickFn(result.meta)
                                }}
                                onTouchStart={(e) => {
                                    e.preventDefault();
                                    this.props.resultClickFn(result.meta)
                                }}
                            >
                                <div><p>{result.title}</p></div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

}


export type SearchResults = {
    title: string;
    meta: any;
}

export type SearchBarProps = {
    /**
     * Defines unit of width for the search component: %, em, rem etc.
     */
    widthUnit?: string;
    /**
     * Width of the SearchBar component. This prop combines with "widthUnit" prop
     * to create width measure. Ex: 100px, 10% etc.
     */
    searchBarWidth?: number;
    /**
     * Results returned after user input are queried by API or some other mechanism.
     * It is responsiblity of parent component to fetch data from user query and return
     * results as searchResults.
     */
    searchResults?: SearchResults[];
    /**
     * Emits observables from user user input query. This callback can be listened, using subscribe,
     * to get user input and call api from it. Further operators like throttle, map etc can be applied
     * on the emitted observable
     */
    searchCbk: (query: string) => void;
    /**
     * This callback will be called when user clicks on any result showed to them in drop-down panel.
     */
    resultClickFn: (meta: any) => void;
}

export type SearchBarStates = {
    shouldDisplayResults: boolean;
    resultsContainerClasses: { [key: string]: boolean };
}


