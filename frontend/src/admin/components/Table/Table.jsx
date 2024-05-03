// Eslint
/* eslint-disable react/prop-types */

// React

// Icons
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

// Style
import { Button } from '../../../ui'
import './table.css'

export function Table({ data, edit }) {



    if (!data) {
        return (
            <p>No hay datos para mostrar</p>
        )
    }

    const columns = Object.keys(data[0])

    const handleOnClick = (id) => {
        edit(id)
    }

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            columns.map((column, index) => (
                                <th key={index}>
                                    {column}
                                </th>
                            ))}
                        <th> Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, rowIndex) => (
                            <tr key={rowIndex}>
                                {
                                    columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                        >
                                            {item[column]}
                                        </td>
                                    ))

                                }
                                <td>
                                    <Button
                                        className='action-btn'
                                        type='button'
                                        name={<MdEdit />}
                                        onClick={() => handleOnClick(item.id)}
                                    />
                                    <Button
                                        className='delete-btn'
                                        type='button'
                                        name={<IoMdTrash cursor={'pointer'} />}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    )
}