from django.urls import path
from .views import home,contacto,articulo,agregar_producto,listar_producto,modificar_producto,eliminar_producto

urlpatterns = [
    path('', home,name="home"),
    path('contacto/', contacto,name="contacto"),
    path('articulo/', articulo,name="articulo"),
    path('agregar-producto/', agregar_producto,name="agregar_producto"),
    path('listar-producto/', listar_producto,name="listar_producto"),
    path('modificar-producto/<int:id>/', modificar_producto, name="modificar_producto"),
    path('eliminar-producto/<int:id>/', eliminar_producto, name="eliminar_producto"),


]