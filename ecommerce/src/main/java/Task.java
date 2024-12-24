package com.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Task {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String description;
private boolean completed;
public Task(String description, boolean completed) {
this.description = description;
this.completed = completed;
}
public Task(String description) {
this(description, false);
}
public Task() { }
@Override
public String toString() {
return "Task [id=" + id + ", description=" + description + ", completed=" + completed + "]";
}
public Long getId() {
return id;
}
public void setId(Long id) {
this.id = id;
}
public String getDescription() {
return description;
}
public void setDescription(String description) {
this.description = description;
}
public boolean isCompleted() {
return completed;
}
public void setCompleted(boolean completed) {
this.completed = completed;
}
}
