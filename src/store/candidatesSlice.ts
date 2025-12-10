import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { candidatesApi, Candidate } from '@/services/candidatesApi';

interface CandidatesState {
  candidates: Candidate[];
  loading: boolean;
  error: string | null;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  filters: {
    name: string;
    skills: string;
    experience: string;
    status: string;
  };
}

const initialState: CandidatesState = {
  candidates: [],
  loading: false,
  error: null,
  totalCount: 0,
  currentPage: 1,
  pageSize: 10,
  filters: {
    name: '',
    skills: '',
    experience: '',
    status: '',
  },
};

export const fetchCandidates = createAsyncThunk(
  'candidates/fetchCandidates',
  async (_, { getState }) => {
    const state = getState() as { candidates: CandidatesState };
    const { currentPage, pageSize, filters } = state.candidates;
    const response = await candidatesApi.getCandidates({
      page: currentPage,
      pageSize,
      ...filters,
    });
    return response;
  }
);

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.currentPage = 1;
    },
    setFilters: (state, action: PayloadAction<Partial<CandidatesState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCandidates.fulfilled, (state, action) => {
        state.loading = false;
        state.candidates = action.payload.candidates;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchCandidates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch candidates';
      });
  },
});

export const { setPage, setPageSize, setFilters, clearFilters } = candidatesSlice.actions;
export default candidatesSlice.reducer;
