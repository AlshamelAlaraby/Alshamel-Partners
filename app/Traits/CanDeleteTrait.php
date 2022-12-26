<?php


namespace App\Traits;


Trait CanDeleteTrait
{

    public function destroy($id)
    {
        if (!$this->canDeleteModel ($id)){
            return responseJson(400,__("this item has children and can't be deleted remove it's children first"));
        }
        $this->repository->delete($id);
        return responseJson(200,__('deleted'));
    }

    public function canDeleteModel($id){
        $model = $this->repository->find($id);
        if (hasChildren ($model)){
            return false;
        }
        return true;
    }

}
