<script>
/**
 * Footer Component
 */
export default {}
</script>

<template>
<!-- Footer Start -->
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 color">
                {{ new Date().getFullYear()}} &copy; Al Shamel Al Araby
            </div>
            <div class="col-md-6">
                <div class="text-md-right footer-links d-none d-sm-block">
                    <a href="javascript:void(0);" class="color">About Us</a>
                    <a href="javascript:void(0);" class="color">Help</a>
                    <a href="javascript:void(0);" class="color">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- end Footer -->
</template>
<style scope>
.color {
    color: #6c757d !important;
}
</style>
