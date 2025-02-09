import {useState} from 'react'

const TodoFormes = ({addTodo}) => {
    const [value, setValue] = useState ("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    };

  return (
    <div className='todo-form'>
        <h2>Criar Tarefas:</h2>
         <form onSubmit={handleSubmit}>
            <input  
                type="text" 
                placeholder='Digite o Título'
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Selecione uma Categória">Selecione uma Categória</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Outros">Outros</option>
            </select>
        <button type='Submit'>Criar Tarefa</button> 
         </form>
    </div>)
};

export default TodoFormes;
