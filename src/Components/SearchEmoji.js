function SearchEmoji (search){
	return (data) => {
        
        if (data.title.toLowerCase().includes(search.toLowerCase())) {
            return true;
            }
        if (data.keywords.includes(search)) {
        return true;
        }
        return false;
	}
}

export default SearchEmoji;


