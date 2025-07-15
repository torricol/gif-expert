import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [valorInput, setValorInput] = useState('');

    const onInputChange = ({target}) => {
        setValorInput(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(valorInput.trim().length <= 1) return;

        // setCategories(categories => [valorInput, ...categories]);
        onNewCategory(valorInput.trim());
        setValorInput('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={valorInput}
                onChange={onInputChange}
            />
        </form>
    )
}
