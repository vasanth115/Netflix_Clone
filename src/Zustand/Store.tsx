import { create } from 'zustand';

 export const initialdata = { id: 0, title: '', year: '', runtime: '', genres: '', director: '', actors: '', plot: '', posterUrl: '', vedio: '' }
export interface FormState {
  email: string;
  name: string;
  password: string;
  islogin: boolean;
  dataset: TypePoster;
  serieslist: Season[];
  episode : Episode
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setIslogin: (islogin: boolean) => void;
  setDataset: (data: TypePoster) => void;
  setSerieslist: (data: Season[]) => void; 
  setEpisode : (data : Episode) => void;
}

export const useFormStore = create<FormState>((set) => ({
  email: '',
  name: '',
  password: '',
  islogin: false,
  dataset: initialdata,
  serieslist: [], 
  episode : {episodeName:'' , plot : '' , vedio : ''},
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setPassword: (password) => set({ password }),
  setIslogin: (islogin) => set({ islogin }),
  setDataset: (data) => set({ dataset: data }),
  setSerieslist: (data) => set({ serieslist: data }) ,
  setEpisode : (data) => set({episode : data})
}));

type TypePoster = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string;
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
  vedio: string;
}

type Episode = {
  episodeName: string;
  plot: string;
  vedio: string;
};

type Season = {
  id : number
  name: string;
  year: string;
  episodesNO: string;
  posterURL: string;
  episodes: Episode[];
};


