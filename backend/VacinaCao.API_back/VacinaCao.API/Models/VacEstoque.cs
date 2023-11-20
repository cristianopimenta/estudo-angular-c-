using System.ComponentModel.DataAnnotations;

namespace VacinaCao.API.Models
{
    public class VacEstoque
        {

            [Key]
            public Guid VaciId { get; set; }

            public string Nome_Vacina { get; set; }

            public int Quantidade { get; set; }

            public string Descricao { get; set; }

            public DateTime Data_Fabricacao { get; set; }

            public DateTime Data_Validade { get; set; }

            public int Lote { get; set; }

            public string Refrigeracao { get; set; }


     }
    
}
