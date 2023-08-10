package dev.shivam.movie;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {


   // private MovieController movieController;
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){

        return movieRepository.findAll();
    }

    public Optional<Movie> getMovieById(String imdbId)
    {
        return movieRepository.getMovieByimdbId(imdbId);
    }
}
