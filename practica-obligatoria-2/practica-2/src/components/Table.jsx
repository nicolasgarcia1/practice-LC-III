import PropTypes from 'prop-types'

const Table = ({ netIncomes }) => {
    const totalIncome = netIncomes.reduce((acc, { income }) => acc + income, 0)
    const averageIncome = parseInt(totalIncome / netIncomes.length)

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map(({ brand, income }, index) => (
                        <tr key={index}>
                            <td><strong>{brand}</strong></td>
                            <td>${income}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <p>Ingresos promedio: ${averageIncome}</p>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

Table.propTypes = {
    netIncomes: PropTypes.arrayOf(PropTypes.shape({
        brand: PropTypes.string,
        income: PropTypes.number
    })),

}

export default Table