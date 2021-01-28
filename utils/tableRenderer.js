/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const renderByDate = (data) => {
    const tableBody = [];
    data = data.slice(0).sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    for(let i = 0; i < data.length; i++) {
        tableBody.push(
            <tr className="divide-x" key={data[i].name}>
                <Styled.td>{data.length-i}</Styled.td>
                <Styled.td className="break-words">{data[i].name}<br/><span sx={{ color: `translationText` }}>{data[i].name_zh}</span></Styled.td>
                <Styled.td className="break-words">{data[i].score}<br/><span sx={{ color: `translationText` }}>({data[i].date})</span></Styled.td>
            </tr>
        );
    }

    return tableBody;
};

const renderByStar = (data) => {

    const tableBody = [];

    for(let i = 0; i < data.length; i++) {
        if (!i || data[i].score !== data[i-1].score)
            tableBody.push(
                <tr key={data[i].score}>
                    <td colSpan="3"><center>★{data[i].score}</center></td>
                </tr>
            );

        tableBody.push(
            <tr className="divide-x" key={data[i].name}>
                <Styled.td>
                    {i+1}
                </Styled.td>
                <Styled.td className="break-words">
                    {data[i].name}
                    <br/>
                    <span sx={{ color: `translationText` }}>{data[i].name_zh}</span>
                </Styled.td>
                <Styled.td className="break-words">
                    {data[i].score}
                </Styled.td>
            </tr>
        );
    }

    return tableBody;
};

const getStat = (data) => {
    let sum = 0;
    let median;
    let mean;

    if (data) {
        data.forEach(el => sum += parseFloat(el.score));

        if (data.length % 2 === 0) {
            median = (data[data.length / 2 - 1].score + data[data.length / 2].score) / 2;
        } else {
            console.log(2)
            median = data[(data.length + 1) / 2 - 1].score;
        }

        mean = (sum / data.length).toFixed(2);
    }

    return [mean, median];
}

export { renderByStar, renderByDate, getStat }
