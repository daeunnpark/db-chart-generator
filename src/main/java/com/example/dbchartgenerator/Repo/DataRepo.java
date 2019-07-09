package com.example.dbchartgenerator.Repo;

import org.springframework.data.repository.CrudRepository;

import com.example.dbchartgenerator.Model.Data;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface DataRepo extends CrudRepository<Data, Long> {

}



/*

@Component
public class WebsiteRepository {
    private static final Map<Integer, Website> WEBSITES = new HashMap<>();
    private static Integer counter = 1;
    public List<Website> findAll() {
        return new ArrayList<>(WEBSITES.values());
    }
    public Website findById(Integer id) {
        return WEBSITES.get(id);
    }
    public void add(Website website) {
        counter++;
        website.setId(counter);
        WEBSITES.put(counter, website);
    }
    public void update(Website website) {
        WEBSITES.put(website.getId(), website);
    }
    public void delete(Integer id) {
        WEBSITES.remove(id);
    }
}


 */
