/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/scope */
import React from "react"
import {
    Table as StyledTable,
    TableRow,
    TableColumn,
} from "./PriceTable.styles"

function PriceTable() {
    const data = [
        { name: "Полиране 💅", price: "$10" },
        { name: "Изграждане ✨", price: "$20" },
        { name: "Поддръжка 💁🏻‍♀️", price: "$20" },
        { name: "Обхождане 😻", price: "$50" },
        { name: "Изчистване 🧼", price: "$3230" },
    ]
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <StyledTable>
                <thead>
                    <TableRow
                        style={{
                            borderTopLeftRadius: "0.2rem",
                            borderTopRightRadius: "0.2rem",
                        }}
                    >
                        <TableColumn style={{ textAlign: "center" }}>
                            Услуга
                        </TableColumn>
                        <TableColumn style={{ textAlign: "center" }}>
                            Цена 💵
                        </TableColumn>
                    </TableRow>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableColumn>{row.name}</TableColumn>
                            <TableColumn>{row.price}</TableColumn>
                        </TableRow>
                    ))}
                </tbody>
            </StyledTable>
        </div>
    )
}

export default PriceTable
