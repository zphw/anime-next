/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState, useEffect } from "react";
import { Box, Styled } from "theme-ui";
// import getBrowserLanguage from "../utils/getBrowserLanguage";
import { renderByStar, renderByDate, getStat } from "../utils/tableRenderer";
import { Data } from '../data/data';

export default class Table extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list: null,
            tableContent: null,
            tableByStar: null,
            tableByDate: null,
            stat: [0, 0]
            // language: null
        }
    }

    componentDidMount() {
        const data = Data;

        const tableByStar = renderByStar(data);
        this.setState({
            list: data,
            tableContent: tableByStar,
            tableByStar: tableByStar,
            tableByDate: renderByDate(data),
            stat: getStat(data)
        });

        // setLanguage(getBrowserLanguage());
    }

    render() {
        return (
            <>
                <Box>
                    <Styled.p sx={{ color: `dark`, mb: 3 }}>
                        <span sx={{ fontWeight: `bold` }}>Sort by</span>
                        <button
                            sx={{
                                mx: 2,
                                height: `30px`,
                                backgroundColor: `light`,
                                display: `inline-flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                padding: `1rem`,
                                borderRadius: `.25rem`,
                                border: `2px solid transparent`,
                                borderColor: `light`,
                                color: `dark`,
                                "&:hover, &:focus": {
                                    outline: `none`,
                                    borderColor: `dark`,
                                    backgroundColor: `dark`,
                                    color: `light`,
                                },
                            }}
                            onClick={() => this.setState({tableContent: this.state.tableByStar})}
                        >
                            Stars
                        </button>
                        <button
                            sx={{
                                mx: 1,
                                height: `30px`,
                                backgroundColor: `light`,
                                display: `inline-flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                padding: `1rem`,
                                borderRadius: `.25rem`,
                                border: `2px solid transparent`,
                                borderColor: `light`,
                                color: `dark`,
                                "&:hover, &:focus": {
                                    outline: `none`,
                                    borderColor: `dark`,
                                    backgroundColor: `dark`,
                                    color: `light`,
                                },
                            }}
                            onClick={() => this.setState({tableContent: this.state.tableByDate})}
                        >
                            Date
                        </button>
                    </Styled.p>
                </Box>

                <div className="flex flex-col w-full">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg"
                            sx={{ variant: 'boxes.table' }}>
                                <table className="w-full divide-y table-fixed">
                                    <thead sx={{ backgroundColor: `background` }}>
                                    <tr>
                                        <Styled.th scope="col" className="text-left tracking-wider" sx={{ width: `12%` }}>
                                            #
                                        </Styled.th>
                                        <Styled.th scope="col" className="text-left tracking-wider" sx={{ width: `65%` }}>
                                            Title
                                        </Styled.th>
                                        <Styled.th scope="col" className="text-left tracking-wider" sx={{ width: `23%` }}>
                                            ★
                                        </Styled.th>
                                    </tr>
                                    </thead>
                                    <tbody sx={{ backgroundColor: `background` }} className="divide-y">
                                    {this.state.tableContent}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Styled.p sx={{ color: `dark`, mt: 4 }}>
                    Mean = {this.state.stat[0]}
                    <br/>
                    Median = {this.state.stat[1]}
                </Styled.p>
            </>
        )
    }
}