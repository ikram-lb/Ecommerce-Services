package lablaida.ikram.billingservice.repository;

import lablaida.ikram.billingservice.entities.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill,Long> {
}
