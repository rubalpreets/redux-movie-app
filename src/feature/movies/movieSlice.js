import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIkey } from "../../common/api/MovieApiKey";
import MovieApi from "../../common/api/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movieSlice/fetchAsyncMovies",
  async (searchTerm) => {
    console.log(searchTerm);
    let MovieText = searchTerm;

    const response = await MovieApi.get(
      `?apikey=${APIkey}&s=${MovieText}&type=movie`
    ).catch((err) => {
      console.log(err);
    });

    console.log(response.data);

    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movieSlice/fetchAsyncSeries",
  async (searchTerm) => {
    let SeriesText = searchTerm;

    const response = await MovieApi.get(
      `?apikey=${APIkey}&s=${SeriesText}&type=series`
    ).catch((err) => {
      console.log(err);
    });

    console.log(response.data);

    return response.data;
  }
);

export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk(
  "movieSlice/fetchAsyncMovieOrSeriesDetail",
  async (id) => {
    console.log(id);
    const response = await MovieApi.get(
      `?apikey=${APIkey}&i=${id}&plot=full`
    ).catch((err) => {
      console.log(err);
    });

    console.log(response.data);

    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  movieOrSeriesDetail: {},
  detailsLoading: false,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.detailsLoading = false;
      })
      .addCase(fetchAsyncMovies.rejected, () => {})

      .addCase(fetchAsyncSeries.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchAsyncSeries.fulfilled, (state, action) => {
        state.series = action.payload;
      })

      .addCase(fetchAsyncMovieOrSeriesDetail.pending, (state, action) => {
        state.movieOrSeriesDetail = {};
        state.detailsLoading = true;
      })
      .addCase(fetchAsyncMovieOrSeriesDetail.fulfilled, (state, action) => {
        state.movieOrSeriesDetail = action.payload;
        state.detailsLoading = false;
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movieSlice.movies;
export const getAllSeries = (state) => state.movieSlice.series;
export const getSelectedMovieOrShow = (state) =>
  state.movieSlice.movieOrSeriesDetail;
export const getDetailLoading = (state) => state.movieSlice.detailsLoading;
export default movieSlice.reducer;
