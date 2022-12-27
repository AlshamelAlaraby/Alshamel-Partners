<?php

use Illuminate\Support\Facades\Cache;

function uploadImage($id, array $value)
{
    \Spatie\MediaLibrary\MediaCollections\Models\Media::where('id', $id)->update($value);
}

/**
 * @param message which return with of response json
 * @param  data  $object
 * @param response_status like 200,500,400
 * @param  pagination  $pagination have default value null
 * @return \Illuminate\Http\JsonResponse
 */
function responseJson($response_status, $massage, $object = null, $pagination = null)
{
    $response = [
        'message' => $massage,
        'data' => $object,
        'pagination' => $pagination,
    ];
    if (request ()->get ('get_translation') == true){
        $response['translations'] = get_trans ();
    }
    return response()->json( $response,$response_status);
}

/**
 * @param collection of data resource
 * @return array of properties for pagination
 */
function getPaginates($collection)
{
    return [
        'per_page' => $collection->perPage(),
        'path' => $collection->path(),
        'total' => $collection->total(),
        'current_page' => $collection->currentPage(),
        'next_page_url' => $collection->nextPageUrl(),
        'previous_page_url' => $collection->previousPageUrl(),
        'last_page' => $collection->lastPage(),
        'has_more_pages' => $collection->hasMorePages(),
        'from' => $collection->firstItem(),
        'to' => $collection->lastItem(),
    ];
}

// Cache methods
function cachePut($key, $value, $minutes = null)
{
    if ($minutes) {
        return Cache::put($key, $value, $minutes);
    } else {
        return Cache::put($key, $value);
    }
}

function cacheGet($key)
{
    return Cache::get($key);
}

function cacheForget($key)
{
    return Cache::forget($key);
}

function hasChildren($model){
    if ($model->hasChildren()){
        return true;
    }
    return false;
}

function get_trans(){
    $translations = \App\Models\Translation::query ();
    if (request ()->has ('company_id')){
        $translations = $translations->where ('company_id',request ()->get ('company_id'));
    }else{
        $translations = $translations->where ('company_id',0);
    }
    $translations = $translations->get ();
    $arr = [];
    foreach ($translations as $d){
        $arr[$d->key] = [
            'id'=>$d->id,
            'default_en'=>$d->default_en,
            'default_ar'=>$d->default_ar,
            'new_en'=>$d->new_en,
            'new_ar'=>$d->new_ar
        ];
    }
    return $arr;
}
