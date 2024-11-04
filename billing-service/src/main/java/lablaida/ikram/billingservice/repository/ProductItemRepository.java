package lablaida.ikram.billingservice.repository;

import lablaida.ikram.billingservice.entities.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductItemRepository extends JpaRepository<ProductItem,Long> {

}
