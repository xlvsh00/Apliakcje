const btn_dodaj = document.querySelector('#btn_dodaj')

btn_dodaj.addEventListener('click', (e) => {
    e.preventDefault()
    const inp_zadanie = document.querySelector('input[type="text"]').value
    const inp_data = document.querySelector('input[type="date"]').value
    const row = `
        <tr>
            <td> ${inp_zadanie }</td>
            <td> ${inp_data} </td>
            <td> <button>USUŃ</button> </td>
        </tr>
        `

        const table = document.querySelector('table')
        table.innerHTML += row
        inp_zadanie = ''
        inp_data = ''


})  
