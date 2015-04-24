package kz.ineeddrugs.entity;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement
@Entity
public class Drug {
    @Id
    private long id;
    private String name;
    private String description;
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @Fetch(FetchMode.SUBSELECT)
    private List<ActiveElement> activeElement;
    @ManyToMany(mappedBy = "drugsList")
    private List<DrugsGroup> drugGroup;
    private int middleCost;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ActiveElement> getActiveElement() {
        return activeElement;
    }

    public void setActiveElement(List<ActiveElement> activeElement) {
        this.activeElement = activeElement;
    }

    public int getMiddleCost() {
        return middleCost;
    }

    public void setMiddleCost(int middleCost) {
        this.middleCost = middleCost;
    }
}
