<?php

namespace App\Http\Controllers\Currency;







use App\Http\Controllers\Controller;







use App\Http\Requests\Currency\CreateCurrencyRequest;
use App\Http\Resources\Currency\CurrencyResource;
use App\Repositories\Currency\CurrencyRepositoryInterface;
use Illuminate\Http\Request;



class CurrencyController extends Controller
{
    public $repository;
    public $resource = CurrencyResource::class;
    public function __construct (CurrencyRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \response
     */
    public function index(Request $request)
    {

        $data = cacheGet ('currencies');
        if ($request->search || $request->is_active){
            cacheForget ('currencies');
            $data = $this->repository->getAll($request);
        }
        if (!$data){
            $data = $this->repository->getAll($request);
            cachePut('currencies', $data);
        }


        return responseJson(200, 'success', ($this->resource)::collection ($data['data']), $data['paginate'] ? getPaginates($data['data']) : null);
    }



    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \response
     */
    public function store(CreateCurrencyRequest $request)
    {
        try {
            $this->repository->create($request->validated ());
            return responseJson (200,__ ('done'));
        }catch (Exception $exception){
            return responseJson ($exception->getCode (),$exception->getMessage ());
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return \response
     */
    public function show($id)
    {
        if ($branch = $this->repository->find($id)){
            return responseJson(200,__ ('Done'),new $this->resource($branch),200);
        }
        return responseJson (404,__ ('not found'));
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return \response
     */
    public function update(Request $request, $id)
    {

        try {
            $this->repository->update($request->all (),$id);
            return responseJson(200,__('updated'));
        }catch (\Exception $exception){
            return responseJson($exception->getCode (),$exception->getMessage ());
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \response
     */
    public function destroy($id)
    {
        $this->repository->delete($id);
        return responseJson(200,__('deleted'));
    }
}
