package dev.shivam.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieController movieController;
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){

        return null;
    }
}
