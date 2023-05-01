

export const Filter = ({ filter, changeFilter}) =>{
    return(
        <label>Find contacts by name
              <input
                type="text"
                placeholder="Find contacts by name"
                value = {filter}
                onChange={changeFilter}
              ></input>
            </label>
    )
}