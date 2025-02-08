# Tutorial: Criando uma To-Do List com Vite.js

## Objetivo

Desenvolver um aplicativo simples de lista de tarefas (*to-do list*) com as seguintes funcionalidades:

- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Remover tarefas.
- Filtrar tarefas.
- Buscar tarefas.

---

## Passo-a-Passo para o Desenvolvimento

### 1. Instalação dos Softwares Necessários

#### Passo 1: Instalar Node.js e npm

1. Acesse [Node.js](https://nodejs.org) e baixe a versão LTS (recomendada).
2. Verifique a instalação com os comandos:

```sh
node -v
npm -v
```

#### Passo 2: Instalar IDE (ex. VSCode)

1. Baixe o [VSCode](https://code.visualstudio.com/).
2. Instale as seguintes extensões:
   - **ESLint**: Para análise de código.
   - **Prettier**: Para formatação automática.
   - **React Developer Tools**: Integração com React.

#### Passo 3: Criar um Projeto com Vite.js

1. Execute no terminal do VSCode:

```sh
npm create vite@latest
```

2. Escolha o nome do projeto (ex: `todo-list`).
3. Selecione **React** e **JavaScript**.
4. Entre na pasta do projeto e instale as dependências:

```sh
cd todo-list
npm install
npm run dev
```

---

### 2. Limpar Código Boilerplate

No arquivo `App.jsx`, remova o código padrão e deixe apenas a estrutura necessária.

---

### 3. Estruturar o Componente Principal (`App.jsx`)

#### 3.1 Criar Estado para as Tarefas

```jsx
const [todos, setTodos] = useState([]);
```

#### 3.2 Adicionar Tarefas (Função `addTodo`)

```jsx
const addTodo = (text) => {
  const newTodo = { id: Date.now(), text, completed: false };
  setTodos([...todos, newTodo]);
};
```

---

### 4. Criar o Componente `TodoForm`

#### 4.1 Arquivo `TodoForm.jsx`

```jsx
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  );
}
```

#### 4.2 Importar em `App.jsx`

```jsx
import TodoForm from "./TodoForm";
```

---

### 5. Criar o Componente `Todo`

#### 5.1 Arquivo `Todo.jsx`

```jsx
function Todo({ todo, completeTodo, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => completeTodo(todo.id)}>✔</button>
      <button onClick={() => removeTodo(todo.id)}>❌</button>
    </div>
  );
}
```

#### 5.2 Funções `removeTodo` e `completeTodo` em `App.jsx`

```jsx
const completeTodo = (id) => {
  setTodos(
    todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};
```

---

### 6. Implementar Busca e Filtros

#### 6.1 Componente `Search.jsx`

```jsx
function Search({ setSearch }) {
  return (
    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Buscar tarefas..." />
  );
}
```

#### 6.2 Componente `Filter.jsx`

```jsx
function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="all">Todas</option>
      <option value="completed">Concluídas</option>
      <option value="pending">Pendentes</option>
    </select>
  );
}
```

#### 6.3 Integrar em `App.jsx`

```jsx
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("all");
```

---

### 7. Estilização com CSS

Crie um arquivo `App.css` e adicione estilos personalizados.

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
```

---

### 8. Executar o Projeto

Execute no terminal do VSCode:

```sh
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) para ver a aplicação funcionando!
