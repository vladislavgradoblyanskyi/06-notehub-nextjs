import axios from "axios";
import type {Note} from '../types/note.ts'
import type {NoteFormValues} from '../types/note.ts'
const BASE_URL = "https://notehub-public.goit.study/api"

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(page: number, search: string) {
  const response = await instance.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage: 15,
      search,
    },
  });

  return response.data;
}

export const createNote = async (note: NoteFormValues) => {
  const res = await instance.post("/notes", note);
  return res.data;
};

export async function deleteNote(id: string) {
  const response = await instance.delete<Note>(`/notes/${id}`);
  return response.data;
}

export const fetchNoteById = async (id:string) => {
  const res = await instance.get<Note>(`/notes/${id}`);
  return res.data;
};
