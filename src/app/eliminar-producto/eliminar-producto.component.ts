import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html'
})
export class EliminarProductoComponent {
  id: number;

  constructor(private productoServicio: ProductoService, 
              private ruta: ActivatedRoute, 
              private enrutador: Router) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.eliminarProducto();
  }

  eliminarProducto() {
    this.productoServicio.eliminarProducto(this.id).subscribe(
      {
        next: (dato) => {
          console.log('Producto eliminado:', dato);
          this.irListaProductos();
        },
        error: (error: any) => console.log(error)
      }
    );
  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }
}
