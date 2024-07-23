import styles from './styles.module.css'
const Search = ({keywords,setKeywords})=>{
    return(
        <div className={styles.search}>
            <input className={styles.input} placeholder="Javascript" onChange={(e)=> setKeywords(e.target.value)}  type="text" value={keywords} />
        </div>
    )
}
export default Search
