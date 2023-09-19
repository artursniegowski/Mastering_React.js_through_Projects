import { Fragment } from "react";

function Table ({ data, config, keyFn }) {
    const renderHeaders = config.map((columnConfig)=>{
        if (columnConfig.header){ // using custom header column name
            return <Fragment key={columnConfig.label}>{columnConfig.header()}</Fragment>;
        };
        return <th key={columnConfig.label}>{columnConfig.label}</th>;
    });

    const renderRows = data.map((objectData)=>{
        const renderedCells = config.map((columnConfig)=>{
            return <td key={columnConfig.label} className="p-3">{columnConfig.render(objectData)}</td>
        });
        
        return (
            <tr className="border-b" key={keyFn(objectData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    );
};

export default Table;   