import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder) {
        return{
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((photo)=>{
                        return { type: 'Photo', id: photo.id};
                    });
                    tags.push({type: 'AlbumPhoto', id: album.id});
                    return tags;
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET' // this is the default method therfore we dont need to provide it
                    };
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'AlbumPhoto', id: album.id }];
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: {
                            albumId: album.id,
                            url: faker.image.url({width: 150, height: 150}) // this will give a random image url
                        }
                    };
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{ type: 'Photo', id: photo.id }];
                },
                query: (photo) => {
                    return {
                        method: 'DELETE',
                        url: `/photos/${photo.id}`
                    };
                }
            }),
        };
    }
});

export const { 
    useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation
} = photosApi;
export { photosApi };