<?php

namespace Modules\RealEstate\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;
use Modules\RealEstate\Repositories\PropertyTypeRepository;
use Modules\RealEstate\Repositories\PropertyTypeRepositoryInterface;
use Modules\RealEstate\Repositories\RlstBuildingRepository;
use Modules\RealEstate\Repositories\RlstBuildingRepositoryInterface;
use Modules\RealEstate\Repositories\RlstUnitRepository;
use Modules\RealEstate\Repositories\RlstUnitRepositoryInterface;
use Modules\RealEstate\Repositories\RlstUnitStatusRepositoryInterface;
use Modules\RealEstate\Repositories\RlstUnitStausRepository;
use Modules\RealEstate\Repositories\RlstWalletBuildingRepository;
use Modules\RealEstate\Repositories\RlstWalletBuildingRepositoryInterface;

class RealEstateServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'RealEstate';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'realestate';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));

        $this->app->bind (PropertyTypeRepositoryInterface::class,PropertyTypeRepository::class);
        $this->app->bind (RlstBuildingRepositoryInterface::class,RlstBuildingRepository::class);
        $this->app->bind (RlstUnitRepositoryInterface::class,RlstUnitRepository::class);
        $this->app->bind (RlstUnitStatusRepositoryInterface::class,RlstUnitStausRepository::class);
        $this->app->bind (RlstWalletBuildingRepositoryInterface::class,RlstWalletBuildingRepository::class);
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            module_path($this->moduleName, 'Config/config.php') => config_path($this->moduleNameLower . '.php'),
        ], 'config');
        $this->mergeConfigFrom(
            module_path($this->moduleName, 'Config/config.php'), $this->moduleNameLower
        );
    }

    /**
     * Register views.
     *
     * @return void
     */
    public function registerViews()
    {
        $viewPath = resource_path('views/modules/' . $this->moduleNameLower);

        $sourcePath = module_path($this->moduleName, 'Resources/views');

        $this->publishes([
            $sourcePath => $viewPath
        ], ['views', $this->moduleNameLower . '-module-views']);

        $this->loadViewsFrom(array_merge($this->getPublishableViewPaths(), [$sourcePath]), $this->moduleNameLower);
    }

    /**
     * Register translations.
     *
     * @return void
     */
    public function registerTranslations()
    {
        $langPath = resource_path('lang/modules/' . $this->moduleNameLower);

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, $this->moduleNameLower);
            $this->loadJsonTranslationsFrom($langPath, $this->moduleNameLower);
        } else {
            $this->loadTranslationsFrom(module_path($this->moduleName, 'Resources/lang'), $this->moduleNameLower);
            $this->loadJsonTranslationsFrom(module_path($this->moduleName, 'Resources/lang'), $this->moduleNameLower);
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

    private function getPublishableViewPaths(): array
    {
        $paths = [];
        foreach (\Config::get('view.paths') as $path) {
            if (is_dir($path . '/modules/' . $this->moduleNameLower)) {
                $paths[] = $path . '/modules/' . $this->moduleNameLower;
            }
        }
        return $paths;
    }
}
